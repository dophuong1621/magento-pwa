/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import React from 'react';
import { useListQuestion } from '../../../talons/useListQuestion';

const ListingQuestion = () => {
    const title = {
        textAlign: 'center', fontSize: '20px', paddingTop: '20px', marginBottom: '20px'
    };

    const divTable = {
        width: '100%',
        height: '25vh',
        display: 'flex',
        alignItems: 'center'
    };

    const table = {
        border: '1px solid',
        width: '600px',
        height: '100px'
    };

    const a = {
        color: 'blue',
        paddingBottom: '20px'
    };

    const tr = { borderBottom: '1px solid black' };

    const td = { textAlign: 'center' };

    const fetchListQuestion = useListQuestion({});
    let formatData;
    formatData = fetchListQuestion.customerQuestion.getCustomerQuestionData;
    return (<div>
        <h1 style={title}>List Customer Question</h1>
        <a href="/tigren_question/create" style={a}>Create Question</a>
        <div style={divTable}>
            <table style={table}>
                <tbody>
                <tr style={tr}>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Content</th>
                    <th>Created At</th>
                </tr>
                </tbody>
                <tfoot>
                {formatData.map((data) => (
                    <tr style={tr}>
                        <td style={td}>{data.customer_id}</td>
                        <td style={td}>{data.customer_name}</td>
                        <td style={td}>{data.title}</td>
                        <td style={td}>{data.content}</td>
                        <td style={td}>{data.created_at}</td>
                    </tr>
                ))}
                </tfoot>
            </table>
        </div>
    </div>);
};

export default ListingQuestion;
