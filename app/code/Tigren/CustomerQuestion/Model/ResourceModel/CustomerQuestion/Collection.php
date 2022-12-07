<?php
/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Model\ResourceModel\CustomerQuestion;

use Magento\Framework\Model\ResourceModel\Db\Collection\AbstractCollection;

/**
 * Class Collection
 * @package Tigren\CustomerQuestion\Model\ResourceModel\CustomerQuestion
 */
class Collection extends AbstractCollection
{
    /**
     * @var string
     */
    protected $_idFieldName = 'entity_id';

    /**
     * @return void
     */
    protected function _construct()
    {
        $this->_init(
            'Tigren\CustomerQuestion\Model\CustomerQuestion',
            'Tigren\CustomerQuestion\Model\ResourceModel\CustomerQuestion'
        );
    }
}
