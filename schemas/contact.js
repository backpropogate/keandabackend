export default {
    name: 'contact',
    title: 'Contact',
    type:'document',
    fields: [
        {
            name: 'contactformheader',
            title: 'Contact form header',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Name',
            description: 'this changes the text inside the name input field',
            type:'string',
        },
        {
            name: 'emailinput',
            title:'Email input',
            description: 'this changes the text inside the email input field',
            type:'string',
        },
        {
            name:'body',
            title: 'Body',
            description: 'this changes the text inside the body input field',
            type:'string',
        },
        {
            name:'button',
            title: 'Button text',
            description: 'this changes the text inside the button',
            type:'string',
        },
        {
            name:'email',
            title:'Email address',
            description:'this changes the email address displayed',
            type: 'string',
        },
        {
            name:'phonenumber',
            title: 'Phone number',
            description:'this changes the phone number displayed',
            type:'string',
        }


    ]
}