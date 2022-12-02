<?php
/*
 * @author    Tigren Solutions <info@tigren.com>
 * @copyright Copyright (c) 2022 Tigren Solutions <https://www.tigren.com>. All rights reserved.
 * @license   Open Software License ("OSL") v. 3.0
 */

namespace Tigren\CustomerQuestion\Model;

use Magento\Framework\Model\AbstractModel;

/**
 * Class CustomerQuestion
 * @package Tigren\CustomerQuestion\Model
 */
class CustomerQuestion extends AbstractModel
{
    const CustomerQuestion_ID = 'customer_id';

    /**
     * @var string
     */
    protected $_eventPrefix = 'customer_question';

    /**
     * @var string
     */
    protected $_eventObject = 'customer_question';

    /**
     * @var string
     */
    protected $_idFieldName = self::CustomerQuestion_ID;

    /**
     * @return void
     */
    protected function _construct()
    {
        $this->_init('Tigren\CustomerQuestion\Model\ResourceModel\CustomerQuestion');
    }
}
