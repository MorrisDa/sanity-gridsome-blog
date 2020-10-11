export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gridsome-blog'
      }
    },
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
                  buildHookId: '5f836b03f2fb3e273ad4328f',
                  title: 'Sanity Studio',
                  name: 'sanity-gridsome-blog-studio-mq4gd2uf',
                  apiId: '7e68e814-442a-4a73-b02f-13385888760a'
                },
                {
                  buildHookId: '5f836b031a19b481d70810a4',
                  title: 'Blog Website',
                  name: 'sanity-gridsome-blog-web-sk5qaamm',
                  apiId: 'ee69e478-80c7-4958-a18b-b8695e81fac7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MorrisDa/sanity-gridsome-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-gridsome-blog-web-sk5qaamm.netlify.app', category: 'apps'}
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
