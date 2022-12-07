<?php
/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Model\Resolver\DataProvider;

use Magento\Framework\Exception\NoSuchEntityException;
use Magento\Framework\GraphQl\Exception\GraphQlNoSuchEntityException;
use Magento\Framework\Stdlib\DateTime\DateTime;
use Tigren\CustomerQuestion\Model\CustomerQuestionFactory;

/**
 * Class UpdateQuestion
 * @package Tigren\CustomerQuestion\Model\Resolver\DataProvider
 */
class UpdateQuestion
{
    /**
     * @var CustomerQuestionFactory
     */
    private $updateQuestion;

    /**
     * @var DateTime
     */
    protected $date;

    /**
     * @param CustomerQuestionFactory $updateQuestion
     * @param DateTime $date
     */
    public function __construct(
        CustomerQuestionFactory $updateQuestion,
        DateTime $date,
    ) {
        $this->updateQuestion = $updateQuestion;
        $this->date = $date;
    }

    /**
     * @param $entity_id
     * @param $customer_name
     * @param $title
     * @param $content
     * @return array
     * @throws GraphQlNoSuchEntityException
     */
    public function updateQuestion($entity_id, $customer_name, $title, $content)
    {
        try {
            $thanks_message['success_message'] = "Error !";
            $dateCurrent = $this->date->gmtDate();
            if (isset($entity_id)) {
                $createQuestion = $this->updateQuestion->create()->load($entity_id);
                $createQuestion->setData('customer_name', $customer_name);
                $createQuestion->setData('title', $title);
                $createQuestion->setData('content', $content);
                $createQuestion->setData('updated_at', $dateCurrent);
                $createQuestion->save();
                $thanks_message['success_message'] = "Thanks For Update Question";
            }
        } catch (NoSuchEntityException $e) {
            throw new GraphQlNoSuchEntityException(__($e->getMessage()), $e);
        }
        return $thanks_message;
    }
}
