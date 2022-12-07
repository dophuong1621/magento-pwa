/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import { gql } from '@apollo/client';

export const UPDATE_CUSTOMER_QUESTION = gql`
    mutation updateQuestion(
        $entity_id: Int!
        $customer_name: String!
        $title: String!
        $content: String!
    ) {
        updateQuestion (
            input: {
                entity_id: $entity_id,
                name: $customer_name,
                title: $title,
                content: $content
            }
        ){
            success_message
        }
    }
`;

export default {
    updateCustomerQuestion: UPDATE_CUSTOMER_QUESTION
};
