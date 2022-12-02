/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import { useMutation } from '@apollo/client';
import DEFAULT_OPERATIONS from '../components/CustomerQuestion/create/createQuestion.gql';
import mergeOperations from '@magento/peregrine/lib/util/shallowMerge';
import { useCallback, useMemo } from 'react';

export const useCreateQuestion = props => {
    const operations = mergeOperations(DEFAULT_OPERATIONS, props.operations);
    const {
        createCustomerQuestion
    } = operations;

    const [createQuestion, { error: createQuestionError }] = useMutation(
        createCustomerQuestion,
        {
            fetchPolicy: 'no-cache'
        }
    );

    const handleSubmit = useCallback(
        async formValues => {
            try {
                await createQuestion({
                    variables: {
                        customer_name: formValues.name,
                        title: formValues.title,
                        content: formValues.content
                    }
                });
            } catch (error) {
                if (process.env.NODE_ENV !== 'production') {
                    console.error(error);
                }
            }
        },
        [createQuestion]
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
