import React, { useState } from 'react';

function Copper(props) {
  const { handleChange } = props;
  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderDropdownOptions = (count) => {
    const options = [];
    for (let i = 0; i <= count; i++) {
      options.push(<option key={i} value={i}>{i}</option>);
    }
    return options;
  };

  return (
    <div>
      <button className="btn btn-secondary custom-width" onClick={toggleCollapse}>
        {isCollapsed ? 'Copper' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>

          <div className='copper'>
            <h2>Copper</h2>
            <p onChange={handleChange}>
              1000FT CAT6 PVC Bulk (White) -{' '}
              <select id='C6E-1000-WHT' name='1000FT CAT6 PVC Bulk (White)'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              1000FT CAT6 UV (Black) -{' '}
              <select id='C6E-1000-UV' name='1000FT CAT6 UV (Black)'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              RJ-45 Ends 100/bag -{' '}
              <select id='6-554720-3' name='RJ-45 Ends 100/bag'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              RJ-11 Ends 100/bag -{' '}
              <select id='7001-6P4C' name='RJ-11 Ends 100/bag'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              Cat5E Copper Keystone Jack 50/bag -{' '}
              <select id='CAT5E-KJ-WHI' name='Cat5E Copper Keystone Jack 50/bag'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              6-Pair Freddy -{' '}
              <select id='66B1-6' name='6-Pair Freddy'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              12-Pair Freddy -{' '}
              <select id='66B1-12' name='12-Pair Freddy'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              Copper Splice Box -{' '}
              <select id='163-06' name='Copper Splice Box'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              MPOE Filter -{' '}
              <select id='649A1-49' name='MPOE Filter'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              MPOE NID Filter Module -{' '}
              <select id='95S-1-12' name='MPOE NID Filter Module'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              Bridge Clips 50/bag -{' '}
              <select id='SA1-1000' name='Bridge Clips 50/bag'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              Cross Connect Wire -{' '}
              <select id='98303397' name='Cross Connect Wire'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              2 Port Jelly Beans (UY-BOX) 100/box -{' '}
              <select id='50029' name='2 Port Jelly Beans (UY-BOX) 100/box'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              3 Port Jelly Beans 100/box -{' '}
              <select id='UR2-BOX' name='3 Port Jelly Beans 100/box'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              1 port Leviton RJ-11 Jack -{' '}
              <select id='4625A-24I' name='1 port Leviton RJ-11 Jack'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              White Circular Jack -{' '}
              <select id='83-056' name='White Circular Jack'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              1 Port Copper Wall Plate -{' '}
              <select id='WP-1-WHI' name='1 Port Copper Wall Plate'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              2 Port Copper Wall Plate -{' '}
              <select id='WP-2-WHI' name='2 Port Copper Wall Plate'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              1 Port Biscuit Block 20/pack -{' '}
              <select id='SM-1-WHI' name='1 Port Biscuit Block 20/pack'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              2 Port Biscuit Block 10/pack -{' '}
              <select id='SM-2-WHI' name='2 Port Biscuit Block 10/pack'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              Mud Ring (1-gang low volt mntg bracket) -{' '}
              <select id='60-0021-S' name='Mud Ring (1-gang low volt mntg bracket)'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              Bonded Filter -{' '}
              <select id='900LCC-2F-50' name='Bonded Filter'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              Single Line Filter -{' '}
              <select id='1001-301003' name='Single Line Filter'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              Dual-Line Splitter Filter -{' '}
              <select id='900LCCS-2F-50' name='Dual-Line Splitter Filter'>
                {renderDropdownOptions(10)}
              </select>
            </p>
            <p onChange={handleChange}>
              Single Line Splitter Filter -{' '}
              <select id='LFT-4-1-GB' name='Single Line Splitter Filter'>
                {renderDropdownOptions(10)}
              </select>
            </p>
          </div>

        </div>
      )}
    </div>
  );
}

export default Copper;
