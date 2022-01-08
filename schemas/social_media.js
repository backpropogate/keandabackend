export default {
    name: 'socialmedia',
    title: 'Social media',
    type: 'document', 
    fields: [
        {
            name: 'sectionheader',
            title: 'Section header',
            type:'string',
        },
        {
            name: 'profileimage',
            title: 'Instagram profile image',
            description: 'You can change this image to match social media image or whatever you want',
            type:'image',
        },
        {
            name: 'instagramname',
            title: 'Instagram name',
            type: 'string',
        },
        {
            name:'posts',
            title:'Instagram posts',
            type: 'array',
            of: [
                {
                    name: 'image',
                    type: 'image',
                    title: 'image'
                },
            ]
        }
    ]
}