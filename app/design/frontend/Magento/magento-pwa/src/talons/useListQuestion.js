/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import { useQuery } from '@apollo/client';
import DEFAULT_OPERATIONS from '../components/CustomerQuestion/list/queriesQuestion.gql';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';

export const useListQuestion = props => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);

    const {
        listCustomerQuestion
    } = operations;

    const { data: customerQuestion } = useQuery(listCustomerQuestion, {
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-first'
    });

    return { customerQuestion };
};


