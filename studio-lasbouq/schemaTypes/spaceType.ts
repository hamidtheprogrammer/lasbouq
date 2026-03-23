import {defineType, defineField} from 'sanity'

export const spaceType = defineType({
  name: 'space',
  title: 'Space',
  type: 'document',

  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {source: 'title', maxLength: 96},
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),

    defineField({
      name: 'size',
      title: 'Capacity (people)',
      type: 'number',
      validation: (rule) => rule.required().min(1),
    }),

    // ✅ Your image index system preserved
    defineField({
      name: 'images',
      title: 'Image Indexes',
      type: 'array',
      of: [{type: 'number'}],
      description: 'Indexes referring to frontend image pool',
      validation: (rule) => rule.required().min(1),
    }),

    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'country',
      title: 'Country',
      type: 'string',
      validation: (rule) => rule.required(),
    }),

    defineField({
      name: 'publishedAt',
      title: 'Published At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
    }),
  ],

  preview: {
    select: {
      title: 'title',
      subtitle: 'city',
    },
  },
})
