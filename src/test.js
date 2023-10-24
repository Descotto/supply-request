const RequestBackup = (<div className='request-options'>
<div className='essentials'>
    <br />
    <Essentials  essentialData={essentialData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
</div>

<div className='secondary'>
    <br />
    <Secondary  secondaryData={secondaryData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
</div>

<div className='brentwood'>
    <br />
    <Brentwood  brentwoodData={brentwoodData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
</div>

<div className='modems'>
    <br />
    <Modems  modemsData={modemsData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
</div>

<div className='zips'>
    <br />
    <Zips  ziptiesData={ziptiesData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
</div>

<div className='accessories'>
    <br />
    <Accessories  wallplatesData={wallplatesData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
</div>

<div className='copper'>
    <br />
    <Copper  copperData={copperData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
</div>

<div className='enterprise'>
    <br />
    <Enterprise  enterpriseData={enterpriseData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
</div>

<div className='tools'>
    <br />
    <Tools  toolsData={toolsData} handleChange={handleChange} renderDropdownOptions={renderDropdownOptions} />
</div>
</div>)