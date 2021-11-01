export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '617ff23397042dddfcc0b48b',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-kckmcouh',
                  apiId: '3e9eb2f3-8028-4816-8264-a28c192c2f74'
                },
                {
                  buildHookId: '617ff23321a499891fa05ad1',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-k55rqqq7',
                  apiId: '3a453aac-c881-4014-88f0-2f4a3756a4a4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Adam-S-Del/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-k55rqqq7.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
