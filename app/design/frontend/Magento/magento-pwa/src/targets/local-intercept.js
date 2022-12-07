/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

module.exports = (targets) => {
    targets.of('@magento/venia-ui').routes.tap((routes) => {
        routes.push({
            name: 'CustomerQuestionIndex',
            pattern: '/tigren_question/index',
            path: require.resolve('../components/CustomerQuestion/list/listQuestion.js')
        });
        routes.push({
            name: 'CustomerQuestionCreate',
            pattern: '/tigren_question/create',
            path: require.resolve('../components/CustomerQuestion/create/createQuestion.js')
        });
        routes.push({
            name: 'CustomerQuestionUpdate',
            pattern: '/tigren_question/edit/:id',
            path: require.resolve('../components/CustomerQuestion/update/updateQuestion.js')
        });
        return routes;
    });
};
