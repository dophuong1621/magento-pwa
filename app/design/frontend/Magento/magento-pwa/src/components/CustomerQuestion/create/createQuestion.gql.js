/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import { gql } from '@apollo/client';

export const CREATE_CUSTOMER_QUESTION = gql`
    mutation questionFormSubmit(
        $customer_name: String!
        $title: String!
        $content: String!
    ) {
        questionFormSubmit (
            input: {
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
    createCustomerQuestion: CREATE_CUSTOMER_QUESTION
};
