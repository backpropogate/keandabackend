// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'
// Important the schema



import portfolioImages from './portfolioImages'
import about_page from './about_page'
import home from './home'
import social_media from './social_media'
import contact from './contact'
import testimonial from './testimonial'
import navigation from './navigation'
import services from './services'


// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    navigation,
    home,    
    services,
    about_page,
    social_media,
    contact,
    portfolioImages,
    testimonial
  ]),
})
