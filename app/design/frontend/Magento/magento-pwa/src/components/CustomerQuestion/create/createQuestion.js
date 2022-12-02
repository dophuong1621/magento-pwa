/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import React from 'react';
import { useCreateQuestion } from '../../../talons/useCreateQuestion';
import { FormattedMessage, useIntl } from 'react-intl';
import Field from '@magento/venia-ui/lib/components/Field';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import { Form } from 'informed';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from '@magento/venia-ui/lib/components/CreateAccount/createAccount.module.css';
import Button from '@magento/venia-ui/lib/components/Button';

const CreateQuestion = (props) => {
    const talonProps = useCreateQuestion({});
    const { handleSubmit } = talonProps;
    const { formatMessage } = useIntl();
    const classes = useStyle(defaultClasses, props.classes);

    const submitButton = (
        <Button
            className={classes.submitButton}
            type="submit"
            priority="high"
            data-cy="CreateQuestion-submitButton"
        >
            <FormattedMessage
                id={'createQuestion.createQuestionText'}
                defaultMessage={'Create Question'}
            />
        </Button>
    );

    return (<div>
        <Form
            data-cy="CreateAccount-form"
            className={classes.root}
            onSubmit={handleSubmit}
        >
            <h2 data-cy="CreateAccount-title" className={classes.title}>
                <FormattedMessage
                    id={'createQuestion.createQuestionTitle'}
                    defaultMessage={'Create Customer Question'}
                />
            </h2>
            <Field
                id="name"
                label={formatMessage({
                    id: 'createQuestion.name',
                    defaultMessage: 'Name'
                })}
            >
                <TextInput
                    id="name"
                    field="name"
                    autoComplete="given-name"
                    validate={isRequired}
                    validateOnBlur
                    mask={value => value && value.trim()}
                    maskOnBlur={true}
                    data-cy="question-name"
                />
            </Field>

            <Field
                id="title"
                label={formatMessage({
                    id: 'createQuestion.title',
                    defaultMessage: 'Title'
                })}
            >
                <TextInput
                    id="title"
                    field="title"
                    autoComplete="given-name"
                    validate={isRequired}
                    validateOnBlur
                    mask={value => value && value.trim()}
                    maskOnBlur={true}
                    data-cy="question-title"
                />
            </Field>

            <Field
                id="content"
                label={formatMessage({
                    id: 'createQuestion.content',
                    defaultMessage: 'Content'
                })}
            >
                <TextInput
                    id="content"
                    field="content"
                    autoComplete="given-name"
                    validate={isRequired}
                    validateOnBlur
                    mask={value => value && value.trim()}
                    maskOnBlur={true}
                    data-cy="question-content"
                />
            </Field>
            <div className={classes.actions}>
                {submitButton}
            </div>
        </Form>
    </div>);
};

export default CreateQuestion;
