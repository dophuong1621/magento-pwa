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

export const useEditQuestion = props => {
    const getDataID = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const {
        editCustomerQuestion
    } = getDataID;

    const [updateQuestion, { error: createQuestionError }] = useMutation(
        editCustomerQuestion,
        {
            fetchPolicy: 'no-cache'
        }
    );
    const history = useHistory();
    const handleSubmit = useCallback(
        async formValues => {
            try {
                await updateQuestion({
                    variables: {
                        customer_name: formValues.name,
                        title: formValues.title,
                        content: formValues.content
                    }
                });
                history.push('/tigren_question/index');
            } catch (error) {
                if (process.env.NODE_ENV !== 'production') {
                    console.error(error);
                }
            }
        },
        [updateQuestion]
    );

    const errors = useMemo(
        () =>
            new Map([
                ['createQuestionQuery', createQuestionError]
            ]),
        [createQuestionError]
    );
    return {
        errors,
        handleSubmit
    };
};
