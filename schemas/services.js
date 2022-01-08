export default {
    name: 'services',
    title: 'Services',
    type: 'document',
    fields: [
        {
            name: 'bigheading',
            title: 'Big heading',
            type: 'string'
        },
        {
            name: 'subheading',
            title: 'Sub Heading',
            type: 'string'
        },
        {
            name:'servicecards',
            title: 'Service Cards',
            type: 'array',
            of:[{
                type:'object',
            
            
            fields: [
               {
                   name:'title',
                   title:'title',
                   type:'string',

               },
                
                {
                    name:'cardheading',
                    title: 'Card Heading',
                    type:'string',
                },
                {
                    name: 'cardbodytext',
                    title: 'Card Body Text',
                    type: 'string',
                },
                {
                    name: 'calltoactiontext',
                    title: 'Call To Action Text',
                    type: 'string',
                }
            ]
        }]
        }
            
    ]
}