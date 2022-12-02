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
 * Class CreateQuestion
 * @package Tigren\CustomerQuestion\Model\Resolver\DataProvider
 */
class CreateQuestion
{
    /**
     * @var CustomerQuestionFactory
     */
    private $createQuestion;

    /**
     * @param CustomerQuestionFactory $createQuestion
     */
    public function __construct(
        CustomerQuestionFactory $createQuestion,
    ) {
        $this->createQuestion = $createQuestion;
    }

    /**
     * @param $customer_id
     * @param $customer_name
     * @param $title
     * @param $content
     * @return array
     * @throws GraphQlNoSuchEntityException
     */
    public function createQuestion($customer_name, $title, $content)
    {
        try {
            $data = [
                'customer_name' => $customer_name,
                'title' => $title,
                'content' => $content,
            ];
            $createQuestion = $this->createQuestion->create();
            $createQuestion->addData($data);
            $createQuestion->save();

            $thanks_message['success_message'] = "Thanks For Question";
        } catch (NoSuchEntityException $e) {
            throw new GraphQlNoSuchEntityException(__($e->getMessage()), $e);
        }

        return $thanks_message;
    }
}
