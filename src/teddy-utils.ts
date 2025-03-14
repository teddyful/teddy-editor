/**
 * Teddy extension functions.
 *
 * @author jillurquddus
 * @since  0.0.1
 */

import * as vscode from 'vscode';
import * as child from 'child_process';
import fs from 'fs';
import util from 'util';


// Core system resources.
const resources = {
	directories: [
		`config`, 
		`sites/travelbook/assets`, 
		`sites/travelbook/languages`, 
		`sites/travelbook/pages`, 
		`sites/travelbook/web`, 
		`system/`, 
		`themes/bear`
	], 
	files: [
		`.gitignore`, 
		`build.js`, 
		`LICENSE`, 
		`package.json`, 
		`package-lock.json`, 
		`README.md`, 
		`sites/travelbook/site.json`
	]
};

// Valid build options.
const validBuildOptions = [
	'--env', 
	'--custom-css-only', 
	'--custom-js-only', 
	'--dist-use-build-id', 
	'--ignore-assets', 
	'--ignore-collection', 
	'--ignore-css', 
	'--ignore-fonts', 
	'--ignore-html', 
	'--ignore-images', 
	'--ignore-js', 
	'--ignore-robots', 
	'--ignore-sitemap', 
	'--ignore-web-config', 
	'--minify-css', 
	'--minify-html', 
	'--minify-js', 
	'--skip-post-build-cleanup'
];

export function validateExtensionConfig(
	config: vscode.WorkspaceConfiguration): {
		isValid: boolean, 
		msg: string 
	} {

	// Validate the configured path to the instance of Teddy.
	if ( !config.path ) {
		return { isValid: false, msg: 'Missing Path - Please configure the ' + 
			'path to a local instance of Teddy in the Teddy extension ' + 
			'settings (Files > Preferences > Settings > Extensions > Teddy).' };
	}
	if ( !fs.existsSync(config.path) ) {
		return { isValid: false, msg: 'Invalid Path - The configured path ' + 
			'to the local instance of Teddy does not exist.' };
	}
	if ( !isValidInstance(config.path) ) {
		return { isValid: false, msg: 'Invalid Path - The configured path ' + 
			'to the local instance of Teddy does not point to a valid ' + 
			'instance of Teddy.' };
	}

	// Parse the system configuration found in the configured instance of Teddy.
	const systemConfigFilePath = `${config.path}/config/system.json`;
	const systemConfig =JSON.parse(fs.readFileSync(
		systemConfigFilePath, 'utf8'));

	// Validate the configured site name.
	const sitesBaseDir = systemConfig.system.sites.startsWith('.') ? 
		`${config.path}/${systemConfig.system.sites}` : 
			systemConfig.system.sites;
	if ( !config.siteName ) {
		return { isValid: false, msg: 'Missing Site Name - Please configure ' + 
			'the name of the site that you wish to build in the Teddy ' + 
			'extension settings (Files > Preferences > Settings > Extensions ' +
			'> Teddy).' };
	}
	const siteDir = `${sitesBaseDir}/${config.siteName}`;
	if ( !fs.existsSync(siteDir) ) {
		return { isValid: false, msg: 'Missing Site - The configured site ' + 
			'name does not correspond to a site that exists in the sites ' + 
			'directory specified by the provided instance of Teddy.' };
	}

	// Validate the configured theme name.
	const themesBaseDir = systemConfig.system.themes.startsWith('.') ? 
		`${config.path}/${systemConfig.system.themes}` : 
			systemConfig.system.themes;
	if ( !config.themeName ) {
		return { isValid: false, msg: 'Missing Theme Name - Please configure ' +
			'the name of the theme that you wish to use in the Teddy ' + 
			'extension settings (Files > Preferences > Settings > ' + 
			'Extensions > Teddy).' };
	}
	const themeDir = `${themesBaseDir}/${config.themeName}`;
	if ( !fs.existsSync(themeDir) ) {
		return { isValid: false, msg: 'Missing Site - The configured theme ' + 
			'name does not correspond to a theme that exists in the themes ' + 
			'directory specified by the provided instance of Teddy.' };
	}

	// Validate the configured build options.
	if ( config.buildOptions ) {
		const opts = config.buildOptions.split(/(\s+)/).filter(
			(opt: string) => opt.startsWith('--'));
		for ( const opt of opts ) {
			if ( !validBuildOptions.includes(opt) ) {
				return { isValid: false, msg: 'Invalid Build Options - The ' + 
					'configured build options contains an invalid option: ' + 
					opt };
			}
		}
	}

	// Valid configuration.
	return { isValid: true, msg: '' };

}

function isValidInstance(path: string): boolean {

	// Validate that the specified path points to a valid instance of Teddy by
	// confirming the existence of relevant core Teddy system resources.
	for ( const resource of resources.directories.concat(resources.files) ) {
		const resourcePath = `${path}/${resource}`;
		if ( !fs.existsSync(resourcePath) ) {
			return false;
		}
	}
	return true;

}

export async function runStaticSiteBuilder(
	config: vscode.WorkspaceConfiguration): 
		Promise<number> {
	let cmd = `npm run --prefix "${config.path}" build -- ` + 
		`--site-name ${config.siteName} ` + 
		`--theme-name ${config.themeName}`;
	if ( config.buildOptions ) {
		cmd = cmd + ' ' + config.buildOptions;
	}
	const exec = util.promisify(child.exec);
	try {
		await exec(cmd);
		return 0;
	} catch (err) {
		return 1;
	}
}
