/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import { gql } from '@apollo/client';

export const EDIT_CUSTOMER_QUESTION = gql`
    mutation getDataIDEdit(
        $entity_id: Int!
    ) {
        getDataIDEdit (
            input: {
                entity_id: $entity,
            }
        ){
            entity_id
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
    editCustomerQuestion: EDIT_CUSTOMER_QUESTION
};
