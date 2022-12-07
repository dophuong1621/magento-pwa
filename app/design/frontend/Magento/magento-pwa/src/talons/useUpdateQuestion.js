/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import { useMutation } from '@apollo/client';
import DEFAULT_OPERATIONS from '../components/CustomerQuestion/update/editQuestion.gql';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import { useCallback, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

export const useUpdateQuestion = props => {
    const getDataID = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const {
        editCustomerQuestion
    } = getDataID;

    const [editQuestion] = useMutation(
        editCustomerQuestion,
        {
            fetchPolicy: 'no-cache'
        }
    );

    return {
        editQuestion
    };
};
