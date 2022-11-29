/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

import React from "react";

const hi = {
    textAlign: "center",
    fontSize: "20px",
    paddingTop: "50px"
};
const wave = {
    ...hi,
    fontSize: "5rem",
};

const ListingQuestion = () => {
    return (
        <div>
            <h1 style={hi}>List Testimonial Question</h1>
            <table>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Title</td>
                    <td>Content</td>
                    <td>Created At</td>
                </tr>
            </table>
        </div>
    );
};

export default ListingQuestion;
