/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\nmutation PostMutation($description: String!, $url: String!) {\n  post(description: $description, url: $url) {\n    id\n    createdAt\n    url\n    description\n  }\n}\n": types.PostMutationDocument,
    "\n  mutation LoginMutation(\n    $email: String!\n    $password: String!\n  ) {\n    login(email: $email, password: $password) {\n      token\n    }\n  }\n": types.LoginMutationDocument,
    "\n  mutation SignupMutation(\n    $email: String!\n    $password: String!\n    $name: String!\n  ) {\n    signup(\n      email: $email\n      password: $password\n      name: $name\n    ) {\n      token\n    }\n  }\n": types.SignupMutationDocument,
    "\nquery FeedQuery {\n  feed {\n    id\n    links {\n      id\n      createdAt   \n      url\n      description\n    }\n  }\n} ": types.FeedQueryDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation PostMutation($description: String!, $url: String!) {\n  post(description: $description, url: $url) {\n    id\n    createdAt\n    url\n    description\n  }\n}\n"): (typeof documents)["\nmutation PostMutation($description: String!, $url: String!) {\n  post(description: $description, url: $url) {\n    id\n    createdAt\n    url\n    description\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation LoginMutation(\n    $email: String!\n    $password: String!\n  ) {\n    login(email: $email, password: $password) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation LoginMutation(\n    $email: String!\n    $password: String!\n  ) {\n    login(email: $email, password: $password) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\n  mutation SignupMutation(\n    $email: String!\n    $password: String!\n    $name: String!\n  ) {\n    signup(\n      email: $email\n      password: $password\n      name: $name\n    ) {\n      token\n    }\n  }\n"): (typeof documents)["\n  mutation SignupMutation(\n    $email: String!\n    $password: String!\n    $name: String!\n  ) {\n    signup(\n      email: $email\n      password: $password\n      name: $name\n    ) {\n      token\n    }\n  }\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery FeedQuery {\n  feed {\n    id\n    links {\n      id\n      createdAt   \n      url\n      description\n    }\n  }\n} "): (typeof documents)["\nquery FeedQuery {\n  feed {\n    id\n    links {\n      id\n      createdAt   \n      url\n      description\n    }\n  }\n} "];

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function gql(source: string): unknown;

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;