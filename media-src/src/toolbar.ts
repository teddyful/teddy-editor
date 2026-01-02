import { t } from "./lang"

export const toolbar = [
	{
	  hotkey: '⌘s',
	  name: 'save',
	  tipPosition: 's',
	  tip: t('save'),
	  className: 'save',
	  icon:
		'<svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><path d="M810.667 938.667H213.333a128 128 0 01-128-128V213.333a128 128 0 01128-128h469.334a42.667 42.667 0 0130.293 12.374L926.293 311.04a42.667 42.667 0 0112.374 30.293v469.334a128 128 0 01-128 128zm-597.334-768a42.667 42.667 0 00-42.666 42.666v597.334a42.667 42.667 0 0042.666 42.666h597.334a42.667 42.667 0 0042.666-42.666v-451.84l-188.16-188.16z"/><path d="M725.333 938.667A42.667 42.667 0 01682.667 896V597.333H341.333V896A42.667 42.667 0 01256 896V554.667A42.667 42.667 0 01298.667 512h426.666A42.667 42.667 0 01768 554.667V896a42.667 42.667 0 01-42.667 42.667zM640 384H298.667A42.667 42.667 0 01256 341.333V128a42.667 42.667 0 0185.333 0v170.667H640A42.667 42.667 0 01640 384z"/></svg>',
	  click() {
		vscode.postMessage({
		  command: 'save',
		  content: vditor.getValue(),
		})
	  },
	},

	'emoji',
	'headings',
	'bold',
	'italic',
	'strike',
	'link',
	'|',
	'list',
	'ordered-list',
	'check',
	'outdent',
	'indent',
	'|',
	'quote',
	'line',
	'code',
	'inline-code',
	'insert-before',
	'insert-after',
	'|',
	'upload',
	'table',
	'|',
	'undo',
	'redo',
	'|',
	{name:'edit-mode', tipPosition: 'e',},
	{
		name: 'build',
		tipPosition: 'n',
		tip: t('build'),
		className: 'save',
		icon: '<svg width="48" height="48" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--twemoji" preserveAspectRatio="xMidYMid meet" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><path fill="#C1694F" d="M25 22h-.253c.16-.798.253-1.633.253-2.5c0-5.247-3.134-9.5-7-9.5s-7 4.253-7 9.5c0 .867.093 1.702.253 2.5H11c-2 3-1.502 8.056.122 9C18 35 14 29 18 29s0 6 6.878 2c1.624-.944 2.122-6 .122-9z"></path><path fill="#C1694F" d="M23.667 20.458c-.177-1.544.317-3.562.255-5.25C22.535 16.292 19.947 17 18 17s-4.51-.708-5.897-1.792c-.062 1.688.407 3.706.23 5.25c-.458 4 2.353 7.184 5.667 7.184s6.125-3.184 5.667-7.184z"></path><path fill="#C1694F" d="M12.373 14s-5 1-6 7s3.419 6.581 5 5c2-2 0-4 0-4s1-5 1-8zm11.254 0s5 1 6 7s-3.419 6.581-5 5c-2-2 0-4 0-4s-1-5-1-8z"></path><path fill="#A0041E" d="M13 13c-2 0-1 1-1 2s1 3 3 2c0 0-1 2-1 5c0 0 2 0 3 2c0 0 1-7 1-9s-4-2-5-2zm10 0c2 0 1 1 1 2s-1 3-3 2c0 0 1 2 1 5c0 0-2 0-3 2c0 0-1-7-1-9s4-2 5-2z"></path><circle fill="#C1694F" cx="11" cy="4" r="4"></circle><circle fill="#662113" cx="11" cy="4" r="2"></circle><circle fill="#C1694F" cx="25" cy="4" r="4"></circle><circle fill="#662113" cx="25" cy="4" r="2"></circle><ellipse fill="#C1694F" cx="18" cy="8.5" rx="8" ry="7.5"></ellipse><circle fill="#292F33" cx="15" cy="8" r="1"></circle><circle fill="#292F33" cx="21" cy="8" r="1"></circle><path fill="#D99E82" d="M18.058 9.563c-6.808 0-4.612 5.562-.147 5.562c4.464 0 6.955-5.562.147-5.562z"></path><path fill="#292F33" d="M16.737 11.065l.526.911a.851.851 0 0 0 1.474 0l.526-.911a.851.851 0 0 0-.737-1.277h-1.052a.851.851 0 0 0-.737 1.277z"></path><path fill="#934035" d="M11.265 27.002a.499.499 0 0 1-.269-.921a2.417 2.417 0 0 0 .997-2.022c-.023-.991-.933-1.641-.942-1.646a.507.507 0 0 1-.213-.368c-.205-2.36.65-4.709.687-4.809a.5.5 0 0 1 .938.346c-.008.021-.761 2.099-.644 4.165c.375.322 1.146 1.124 1.174 2.289c.044 1.91-1.398 2.851-1.459 2.89a.523.523 0 0 1-.269.076zm13.471 0a.5.5 0 0 1-.269-.078c-.062-.039-1.504-.979-1.46-2.89c.027-1.165.799-1.967 1.174-2.289c.118-2.072-.636-4.143-.644-4.164a.5.5 0 1 1 .938-.347c.037.099.893 2.448.688 4.809a.502.502 0 0 1-.215.369c-.008.005-.918.654-.94 1.646a2.416 2.416 0 0 0 .997 2.022a.5.5 0 0 1-.269.922zM24.665 22h.01h-.01z"></path><ellipse transform="rotate(-45.001 11.121 30.5)" fill="#C1694F" cx="11.122" cy="30.5" rx="4.5" ry="5"></ellipse><path fill="#D99E82" d="M13.349 33.227c-1.054 1.054-2.906.912-4.137-.318c-1.23-1.23-1.373-3.082-.318-4.137c1.054-1.054 2.906-.912 4.137.318c1.23 1.231 1.372 3.083.318 4.137z"></path><path fill="#D99E82" d="M12.889 32.768c-.781.781-2.206.623-3.182-.354c-.976-.976-1.135-2.401-.354-3.182c.781-.781 2.206-.623 3.182.354s1.135 2.401.354 3.182z"></path><ellipse transform="rotate(-45.001 24.878 30.5)" fill="#C1694F" cx="24.878" cy="30.5" rx="5" ry="4.5"></ellipse><path fill="#D99E82" d="M22.651 33.227c1.054 1.054 2.906.912 4.137-.318c1.23-1.23 1.373-3.082.318-4.137c-1.054-1.054-2.906-.912-4.137.318c-1.23 1.231-1.372 3.083-.318 4.137z"></path><ellipse transform="rotate(-45.001 24.878 31)" fill="#D99E82" cx="24.878" cy="31" rx="2.5" ry="2"></ellipse><path fill="#292F33" d="M18.087 14.138c-1.28 0-2.249-.947-2.264-.961a.25.25 0 0 1 .353-.354c.075.074 1.849 1.797 3.647 0a.25.25 0 1 1 .354.354c-.721.721-1.445.961-2.09.961z"></path><path fill="#934035" d="M15.95 29.727a.5.5 0 0 1-.449-.28c-2.274-4.635-6.795-3.15-6.986-3.086a.5.5 0 0 1-.326-.946c.055-.02 5.543-1.845 8.21 3.592a.5.5 0 0 1-.449.72zm4.101 0a.499.499 0 0 1-.46-.695c2.255-5.301 8.141-3.641 8.198-3.623a.499.499 0 0 1 .339.619a.505.505 0 0 1-.619.341c-.207-.061-5.096-1.42-6.998 3.054a.502.502 0 0 1-.46.304z"></path></g></svg>', 
		toolbar: [
			{
				name: 'build-site',
				icon: t('buildSite'), 
				click: async () => {
					try {
						await vscode.postMessage({
							command: 'teddy-build-site',
						});
					} catch (error) {
						vscode.postMessage({
							command: 'error',
							content: `An unexpected error was encountered whilst attempting to build the site: ${error.message}`,
						});
					}
				}
			}, 
			{
				name: 'build-site-ignore-assets', 
				className: 'vditor-menu--separator', 
				icon: t('buildSiteIgnoreAssets'), 
				click: async () => {
					try {
						await vscode.postMessage({
							command: 'teddy-build-site-ignore-assets',
						});
					} catch (error) {
						vscode.postMessage({
							command: 'error',
							content: `An unexpected error was encountered whilst attempting to build the site: ${error.message}`,
						});
					}
				}
			}, 
			{
				name: 'build-site-ignore-collection',
				icon: t('buildSiteIgnoreCollection'), 
				click: async () => {
					try {
						await vscode.postMessage({
							command: 'teddy-build-site-ignore-collection',
						});
					} catch (error) {
						vscode.postMessage({
							command: 'error',
							content: `An unexpected error was encountered whilst attempting to build the site: ${error.message}`,
						});
					}
				}
			}, 
			{
				name: 'build-site-generate-ds-pdf',
				icon: t('buildSiteGenerateDsPdf'), 
				click: async () => {
					try {
						await vscode.postMessage({
							command: 'teddy-build-site-generate-ds-pdf',
						});
					} catch (error) {
						vscode.postMessage({
							command: 'error',
							content: `An unexpected error was encountered whilst attempting to build the site: ${error.message}`,
						});
					}
				}
			}
		]
	},
	{
	  name: 'more',
	  tipPosition: 'e',
	  toolbar: [
		'both',
		'outline',
		'preview',
		{
		  name: 'copy-markdown',
		  icon: t('copyMarkdown'),
		  async click() {
			try {
			  await navigator.clipboard.writeText(vditor.getValue())
			  vscode.postMessage({
				command: 'info',
				content: 'Markdown copied to the clipboard.',
			  })
			} catch (error) {
			  vscode.postMessage({
				command: 'error',
				content: `Failed to copy the markdown.`,
			  })
			}
		  },
		},
		{
		  name: 'copy-html',
		  icon: t('copyHtml'),
		  async click() {
			try {
			  await navigator.clipboard.writeText(vditor.getHTML())
			  vscode.postMessage({
				command: 'info',
				content: 'HTML copied to the clipboard.',
			  })
			} catch (error) {
			  vscode.postMessage({
				command: 'error',
				content: `Failed to copy the HTML to the clipboard.`,
			  })
			}
		  },
		}, 
		'content-theme'
	  ],
	},
  ].map((it: any) => {
	if (typeof it === 'string') {
	  it = { name: it }
	}
	it.tipPosition = it.tipPosition || 's'
	return it
  })
