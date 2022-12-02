<?php
/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Model\Resolver\DataProvider;

use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\GraphQl\Exception\GraphQlNoSuchEntityException;
use Tigren\CustomerQuestion\Model\ResourceModel\CustomerQuestion\CollectionFactory;

/**
 * Class CustomerQuestionData
 * @package Tigren\CustomerQuestion\Model\Resolver\DataProvider
 */
class CustomerQuestionData
{
    /**
     * @var CollectionFactory
     */
    protected $collection;

    /**
     * @param CollectionFactory $collection
     */
    public function __construct(
        CollectionFactory $collection
    ) {
        $this->collection = $collection;
    }

    /**
     * @return array|null
     * @throws GraphQlNoSuchEntityException
     */
    public function getCustomerQuestionData()
    {
        try {
            $collection = $this->collection->create();
            $customerQuestionData = $collection->getData();

        } catch (NoSuchEntityException $e) {
            throw new GraphQlNoSuchEntityException(__($e->getMessage()), $e);
        }
        return $customerQuestionData;
    }
}
