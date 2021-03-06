<?php

/**
 * Pimcore
 *
 * This source file is available under two different licenses:
 * - GNU General Public License version 3 (GPLv3)
 * - Pimcore Enterprise License (PEL)
 * Full copyright and license information is available in
 * LICENSE.md which is distributed with this source code.
 *
 *  @copyright  Copyright (c) Pimcore GmbH (http://www.pimcore.org)
 *  @license    http://www.pimcore.org/license     GPLv3 and PEL
 */

namespace CustomerManagementFrameworkBundle\Listing\Filter;

class FloatBetween extends AbstractFieldBetween
{
    /**
     * @var float
     */
    protected $from;

    /**
     * @var float
     */
    protected $to;

    /**
     * @param string $field
     * @param float|null $from
     * @param float|null $to
     */
    public function __construct($field, $from = null, $to = null)
    {
        parent::__construct($field);

        if (null !== $from) {
            $this->from = (float)$from;
        }

        if (null !== $to) {
            $this->to = (float)$to;
        }
    }

    /**
     * @return float|null
     */
    protected function getFromValue()
    {
        return $this->from;
    }

    /**
     * @return float|null
     */
    protected function getToValue()
    {
        return $this->to;
    }
}
