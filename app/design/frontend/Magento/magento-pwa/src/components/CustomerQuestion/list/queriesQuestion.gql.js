/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import { gql } from '@apollo/client';

export const GET_LIST_QUESTION_QUERY = gql`
    query CustomerQuestionData {
        getCustomerQuestionData {
            customer_id
            customer_name
            title
            content
            created_at
            updated_at
        }
    }
`;

export default {
    listCustomerQuestion: GET_LIST_QUESTION_QUERY
};
