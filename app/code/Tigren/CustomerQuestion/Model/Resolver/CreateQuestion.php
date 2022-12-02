<?php
/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Model\Resolver;

use Magento\Framework\GraphQl\Config\Element\Field;
use Magento\Framework\GraphQl\Exception\GraphQlInputException;
use Magento\Framework\GraphQl\Query\ResolverInterface;
use Magento\Framework\GraphQl\Schema\Type\ResolveInfo;

/**
 * Class CreateQuestion
 * @package Tigren\CustomerQuestion\Model\Resolver
 */
class CreateQuestion implements ResolverInterface
{
    /**
     * @var DataProvider\CreateQuestion
     */
    private $createQuestion;

    /**
     * @param
     */
    public function __construct(
        \Tigren\CustomerQuestion\Model\Resolver\DataProvider\CreateQuestion $createQuestion
    ) {
        $this->createQuestion = $createQuestion;
    }

    /**
     * @inheritdoc
     */
    public function resolve(
        Field $field,
        $context,
        ResolveInfo $info,
        array $value = null,
        array $args = null
    ) {
        if (empty($args['input']) || !is_array($args['input'])) {
            throw new GraphQlInputException(__('"input" value should be specified'));
        }
        $customer_name = $args['input']['name'];
        $title = $args['input']['title'];
        $content = $args['input']['content'];

        return $this->createQuestion->createQuestion(
            $customer_name,
            $title,
            $content
        );
    }
}
