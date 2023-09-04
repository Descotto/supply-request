import React, { useState } from 'react';

function Tools(props) {
  const { handleChange } = props;

  const [isCollapsed, setIsCollapsed] = useState(true);

  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };

  const renderOptions = () => {
    return [...Array(11).keys()].map((value) => (
      <option key={value} value={value}>
        {value}
      </option>
    ));
  };

  return (
    <div>
      <button className="btn btn-secondary custom-width btn-color2" onClick={toggleCollapse}>
        {isCollapsed ? 'Tools' : 'Collapse'}
      </button>
      {!isCollapsed && (
        <div>
          <div>
            <div className='tools items-container'>
              <h2 className='items-title'>Tools</h2>
              <div className='items-list'>
                <p onChange={handleChange}>
                  ONT Sticker - Small -
                  <select id='STICKER-DNR' name='ONT Sticker - Small'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  ONT Sticker - Large -
                  <select id='STICKER-DNR-ONT' name='ONT Sticker - Large'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  ONT Caution Sticker for 10G -
                  <select id='STICKER-DNR-10G' name='ONT Caution Sticker for 10G'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  AA Batteries -
                  <select id='ALAA-8J' name='AA Batteries'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  AAA Batteries -
                  <select id='ALAAA-8J' name='AAA Batteries'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  9v Battery -
                  <select id='AL9V-12PPJ' name='9v Battery'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  Flex Bit -
                  <select id='GAL-BFS37554' name='Flex Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  3/8" x 12" Wood Bit -
                  <select id='GAL-BH37512' name='3/8" x 12" Wood Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  3/8" x 18" Wood Bit -
                  <select id='GAL-BH37518' name='3/8" x 18" Wood Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  3/8" x 12" Masonry Bit -
                  <select id='GAL-H37513' name='3/8" x 12" Masonry Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  3/8" x 18" Masonry Bit -
                  <select id='GAL-H37518' name='3/8" x 18" Masonry Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  1/2" x 12" Bit -
                  <select id='GAL-H50013' name='1/2" x 12" Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  1/2" x 24" Bit -
                  <select id='GAL-H50024' name='1/2" x 24" Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  #2 2" Phillips bit -
                  <select id='A-98980' name='#2 2" Phillips bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  1/4" Drive Bit -
                  <select id='49-66-4702' name='1/4" Drive Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  5/32" Bit -
                  <select id='LBHX002' name='5/32" Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  3/16" Bit -
                  <select id='LBHX0035' name='3/16" Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  12" x 6" Bit -
                  <select id='IMC16' name='12" x 6" Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  Con-Sert Bit -
                  <select id='DIV-CSB018S' name='Con-Sert Bit'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  Label Maker Tape- Big -
                  <select id='TZE-231' name='Label Maker Tape- Big'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  Bucket -
                  <select id='KEN-5GB' name='Bucket'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  Booties -
                  <select id='YZYAYUJRONSC-01' name='Booties'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  Mini Broom and Dust Pan -
                  <select id='B00C2DRVRI' name='Mini Broom and Dust Pan'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  Wall Patch -
                  <select id='SHR-3-AIO' name='Wall Patch'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  Drop Tensioner -
                  <select id='906' name='Drop Tensioner'>
                    {renderOptions()}
                  </select>
                </p>
                <p onChange={handleChange}>
                  P-Hook -
                  <select id='31-00809' name='P-Hook'>
                    {renderOptions()}
                  </select>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Tools;
