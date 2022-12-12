export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '63972844721fc3133024742e',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ix466vff',
                  apiId: '8554c9dd-7d6e-4ddf-b199-e702b197f78c'
                },
                {
                  buildHookId: '639728451604bf0a2bba3b12',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-tkdk4mtq',
                  apiId: 'a3fba76e-f9d0-4c5c-937d-2d62cab32aaf'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoeMatkin/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-tkdk4mtq.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
