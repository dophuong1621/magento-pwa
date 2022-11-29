/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

module.exports = (targets) => {
    targets.of("@magento/venia-ui").routes.tap((routes) => {
        routes.push({
            name: "TestimonialQuestionIndex",
            pattern: "/tigren_question/index",
            path: require.resolve("../components/TestimonialQuestion/listQuestion.js"),
        });
        routes.push({
            name: "TestimonialQuestionCreate",
            pattern: "/tigren_question/create",
            path: require.resolve("../components/TestimonialQuestion/createQuestion.js"),
        });
        return routes;
    });
};
