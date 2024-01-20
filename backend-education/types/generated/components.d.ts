import type { Schema, Attribute } from '@strapi/strapi';

export interface ContentContent extends Schema.Component {
  collectionName: 'components_content_contents';
  info: {
    displayName: 'content';
    description: '';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.RichText;
    input: Attribute.RichText;
    output: Attribute.RichText;
  };
}

export interface TopicTopic extends Schema.Component {
  collectionName: 'components_topic_topics';
  info: {
    displayName: 'Topic';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.RichText;
    content: Attribute.Component<'content.content', true>;
    videoId: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'content.content': ContentContent;
      'topic.topic': TopicTopic;
    }
  }
}
