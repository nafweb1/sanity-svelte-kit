import {DocumentIcon} from '@sanity/icons'

export default {
  name: 'post',
  type: 'document',
  title: 'Artikler',
  icon: DocumentIcon,
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Tittel',
      description: 'Tittelen bør være catchy, beskrivende og ikke for lang',
      validation: (Rule) => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Korttekst',
      description: 'Denne artikkelens adresse på NAFWeb',
      options: {
        source: 'title',
        maxLength: 96
      },
      validation: (Rule) => Rule.required()
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publiseringsdato',
      description: 'Dette kan også brukes for å planlegge publisering av artikler'
    },
    {
      name: 'image',
      type: 'image',
      title: 'Hovedbilde'
    },
    {
      name: 'authors',
      title: 'Forfatter(e)',
      type: 'array',
      of: [
        {
          type: 'authorReference'
        }
      ]
    },
    {
      name: 'categories',
      type: 'array',
      title: 'Kategorier',
      of: [
        {
          type: 'reference',
          to: {
            type: 'category'
          }
        }
      ]
    },
    {
      name: 'featured',
      type: 'boolean',
      title: 'Vis på forsiden',
      description: 'Kryss av på denne dersom artikelen skal vises på forsiden',
    },
    {
      name: 'body',
      type: 'bodyPortableText',
      type: 'array',
      title: 'Artikkeltekst',
      of: [
        {
          type: 'block',
          title: 'Block',
          // Styles let you set what your user can mark up blocks with. These
          // corrensponds with HTML tags, but you can set any title or value
          // you want and decide how you want to deal with it where you want to
          // use your content.
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Overskrift 1', value: 'h1'},
            {title: 'Overskrift 2', value: 'h2'},
            {title: 'Overskrift 3', value: 'h3'},
            {title: 'Overskrift 4', value: 'h4'},
            {title: 'Quote', value: 'blockquote'}
          ],
          lists: [
            {title: 'Kuleliste', value: 'bullet'},
            {title: 'Nummerliste', value: 'number'}
          ],
          // Marks let you mark up inline text in the block editor.
          marks: {
            // Decorators usually describe a single property – e.g. a typographic
            // preference or highlighting by editors.
            decorators: [
              {title: 'Fet', value: 'strong'},
              {title: 'Kursiv', value: 'em'}
            ],
            // Annotations can be any object structure – e.g. a link or a footnote.
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'URL',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url'
                  }
                ]
              }
            ]
          },
          of: [{type: 'authorReference'}]
        },
        // You can add additional types here. Note that you can't use
        // primitive types such as 'string' and 'number' in the same array
        // as a block type.
        {
          type: 'image',
          options: {hotspot: true}
        },
        {
          type: 'code'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title',
      slug: 'slug',
      media: 'image'
    },
    prepare({title = 'Ingen tittel', slug, media}) {
      const path = `/nyheter/${slug.current}/`
      return {
        title,
        media,
        subtitle: path
      }
    }
  }
}