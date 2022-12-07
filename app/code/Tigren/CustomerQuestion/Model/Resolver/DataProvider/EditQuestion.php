<?php
/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Model\Resolver\DataProvider;

use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\GraphQl\Exception\GraphQlNoSuchEntityException;
use Tigren\CustomerQuestion\Model\CustomerQuestionFactory;

/**
 * Class EditQuestion
 * @package Tigren\CustomerQuestion\Model\Resolver\DataProvider
 */
class EditQuestion
{
    /**
     * @var CustomerQuestionFactory
     */
    private $editQuestion;

    /**
     * @param CustomerQuestionFactory $editQuestion
     */
    public function __construct(
        CustomerQuestionFactory $editQuestion,
    ) {
        $this->editQuestion = $editQuestion;
    }

    /**
     * @param $entity_id
     * @return array
     * @throws GraphQlNoSuchEntityException
     */
    public function editQuestion($entity_id)
    {
        try {
            $loadData = $this->editQuestion->create()->load($entity_id);
            $editQuestion = $loadData->getData();
            $writer = new \Zend_Log_Writer_Stream(BP . '/var/log/custom.log');
            $logger = new \Zend_Log();
            $logger->addWriter($writer);
            $logger->info(print_r($editQuestion, true));
        } catch (NoSuchEntityException $e) {
            throw new GraphQlNoSuchEntityException(__($e->getMessage()), $e);
        }
        return $editQuestion;
    }
}
