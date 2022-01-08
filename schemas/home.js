export default {
    name: 'home',
    title: 'Home',
    type: 'document',
    fields: [
        {
            name:'heading',
            title: 'heading',
            type: 'string',
        },
        {
            name:'subheading',
            title: 'Sub Heading',
            type: 'string',
        },
        {
            name:'firstbutton',
            title: 'First button text',
            description: 'You can change the text for the first button',
            type: 'string',
           
        },
        {
            name:'secondbutton',
            title: 'Second button text',
            description: 'You can change the text for the second button',
            type: 'string',
           
        },
        {
            name:'desktopimage',
            title: 'Desktop Image',
            type:'image',
            description: 'change the image that appears on desktop mode',
        },
       
    ]
}