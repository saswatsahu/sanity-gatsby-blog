export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5eeeb610028bdd440093e9d4',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-1dmgo2tf',
                  apiId: '1369e621-47f4-468a-acb1-cedb18bf2b04'
                },
                {
                  buildHookId: '5eeeb610b11b6d878d724a05',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-r6qcgyku',
                  apiId: '4b5270de-bd33-4215-97da-a19d83133d88'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saswatsahu/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-r6qcgyku.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
