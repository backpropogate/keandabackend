export default {
    name: 'testimonial',
    title: 'Client Testimonials',
    type: 'document',
    fields: [
        {
            name: 'smallheading',
            title: 'Small Heading',
            type: 'string'
        },
        {
            name: 'bigheading',
            title: 'Big Heading',
            type: 'string'
        },
        {
            name:'tesicards',
            title: 'Testimonial Cards',
            type: 'array',
            of:[{
                type:'object',
            
            
            fields: [
               {
                   name: 'clientname',
                   title:'Client name',
                   type:'string',
               },
               {
                   name:'image',
                   title:'Client Image',
                   type:'image'
               },
               {
                   name:'clienttitle',
                   title:'Client title',
                   type:'string',
               },
               {
                   name:'testimonial',
                   title:'Testimonial',
                   type:'string',
               }
            ]
        }]
        }

            
    ]
}