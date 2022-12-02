<?php
/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Model\Resolver;

use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Exception\GraphQlNoSuchEntityException;
use Magento\Framework\GraphQl\Query\ResolverInterface;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;
use Tigren\CustomerQuestion\Model\Resolver\DataProvider\CustomerQuestionData;

/**
 * Class CustomerQuestion
 * @package Tigren\CustomerQuestion\Model\Resolver
 */
class CustomerQuestion implements ResolverInterface
{
    /**
     * @var CustomerQuestionData
     */
    private $customerQuestionData;

    /**
     * @param CustomerQuestionData $customerQuestionData
     */
    public function __construct(
        CustomerQuestionData $customerQuestionData
    ) {
        $this->customerQuestionData = $customerQuestionData;
    }

    /**
     * @param Field $field
     * @param $context
     * @param ResolveInfo $info
     * @param array|null $value
     * @param array|null $args
     * @return array
     * @throws GraphQlNoSuchEntityException
     */
    public function resolve(
        Field $field,
        $context,
        ResolveInfo $info,
        array $value = null,
        array $args = null
    ) {
        return $this->customerQuestionData->getCustomerQuestionData();
    }
}
