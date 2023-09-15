import React, { useState } from 'react';
import siteData from './siteData.json'

function EssentialsTest(props) {
    const [order, setOrder] = useState([]);
    const [isCollapsed, setIsCollapsed] = useState(true);
    //===essentials
    const siteData = {
        essentialData: [
            { itemCode: '1287787F1', description: '1g ONT 20/case', requested: '1' },

            { itemCode: '1287843F1N', description: '10g ONT 10/case', requested: '1' },

            { itemCode: 'TY-15132B', description: 'Fiber Termination (Transition Box) 40/case', requested: '1' },

            { itemCode: 'FDB-08B', description: 'Fiber Dist. Box (8 Port MDU Splitter)', requested: '1' },

            { itemCode: 'SC-APC-H02', description: 'Fiber Quick Connect (Fiber Ends) 100/box', requested: '1' },

            { itemCode: '25321464', description: 'ONT Screw (PHSMSS61) 100/box', requested: '1' },

            { itemCode: '93174711', description: 'Wood Screw (Termination Box Screw) 100/box', requested: '1' },

            { itemCode: 'MAR1001411', description: 'Wall Anchors (Mollys) 100/box', requested: '1' },

            { itemCode: 'S-5143-FINS', description: 'Black Electric Tape', requested: '1' }
        ],
        secondaryData: [
            { itemCode: '108193', description: '1M White int. Jumper 40/bag', requested: '1' },
            { itemCode: 'SC-APCSC-APC-3M', description: '3m secondary drop', requested: '1' },
            { itemCode: 'SC-APCSC-APC10M', description: '10m secondary drop', requested: '1' },
            { itemCode: 'SC-APCSC-APC20M', description: '20m secondary drop', requested: '1' },
            { itemCode: 'SC-APCSC-APC35M', description: '35m secondary drop', requested: '1' },
            { itemCode: 'SC-APCSC-APC50M', description: '50m secondary drop', requested: '1' },
            { itemCode: 'SC-APCSC-APC75M', description: '75m secondary drop', requested: '1' },
            { itemCode: 'SC-APCSC-APC100', description: '100m secondary drop', requested: '1' },
            { itemCode: 'SCAPCSCAPC-3M-W', description: '3m secondary drop (White)', requested: '1' },
            { itemCode: 'SCAPCSCAPC10M-W', description: '10m secondary drop (White)', requested: '1' },
            { itemCode: 'SCAPCSCAPC20M-W', description: '20m secondary drop (White)', requested: '1' },
            { itemCode: 'SCAPCSCAPC35M-W', description: '35m secondary drop (White)', requested: '1' }
        ],
        brentwoodData: [
            { itemCode: 'FS-AA1-001-0150', description: "150' Brentwood Drop", requested: '1' },
            { itemCode: 'FS-AA1-001-0200', description: "200' Brentwood Drop", requested: '1' },
            { itemCode: 'FS-AA1-001-0300', description: "300' Brentwood Drop", requested: '1' },
            { itemCode: 'FS-AA1-001-0400', description: "400' Brentwood Drop", requested: '1' },
            { itemCode: 'FS-AA1-001-0500', description: "500' Brentwood Drop", requested: '1' }
        ],
        modemsData: [

            { itemCode: 'N010011 (w/psu C110011)', description: 'Eero 6 (cupcake) 20/case', requested: '1' },
            { itemCode: 'S012011 (w/psu C210011)', description: 'Eero Pro 6E 12/case', requested: '1' },
            { itemCode: 'K010011 (w/psu C210011)', description: 'Eero 6 Pro 12/case', requested: '1' },
            { itemCode: '515 KIT', description: '515 Tested kit', requested: '1' },
            { itemCode: '5268 KIT', description: '5268 Tested kit', requested: '1' }
        ],
        ziptiesData: [

            { itemCode: 'CP-8-40-B', description: '8" Zip Ties Black 100/bag or 1,000/bag', requested: '1' },
            { itemCode: 'CP-8-40-N', description: '8" Zip Ties Natural 100/bag or 1,000/bag', requested: '1' },
            { itemCode: 'CP-7-50MH-B', description: '8" Screwdown Zip Ties Black 100/bag', requested: '1' },
            { itemCode: 'CP-7-50MH-N', description: '8" Screwdown Zip Ties Natural 100/bag', requested: '1' },
            { itemCode: 'CP-11-50-B', description: '11" Zip Tie Black 100/bag or 1,000/bag', requested: '1' },
            { itemCode: 'CP-14-50MH-B', description: '14" Screwdown Zip Ties Black 100/bag', requested: '1' },
            { itemCode: 'G4BK-03', description: 'Small Flex Clips Black 100/bag', requested: '1' },
            { itemCode: 'G4BK-05', description: 'Large Flex Clips Black 100/bag', requested: '1' },
            { itemCode: 'G4WH-03', description: 'Small Flex Clips White 100/bag', requested: '1' },
            { itemCode: 'G4WH-05', description: 'Large Flex Clips White 100/bag', requested: '1' }
        ],
        wallplatesData: [

            { itemCode: '1901L', description: 'Fiber Optic Wall Plate, 1P, White 20/box', requested: '1' },
            { itemCode: 'DA1WH', description: '1 Port Fiber Angled Wall Plate 25/box', requested: '1' },
            { itemCode: 'DA2WH', description: '2 Port Fiber Angled Wall Plate 25/box', requested: '1' },
            { itemCode: 'IC107DA4WH', description: '4 Port Angled Wall Plate 25/box', requested: '1' },
            { itemCode: 'ACSFTW', description: 'White Grommets 100/bag', requested: '1' },
            { itemCode: 'ACSFTW-B', description: 'Black Grommets 100/bag', requested: '1' },
            { itemCode: 'SBWH06', description: 'RG6/coaxial split bushings 7/16 100/bag', requested: '1' },
            { itemCode: 'ACM-652114', description: '9/16 Staple for T25/25A', requested: '1' },
            { itemCode: 'AKI-SCA-WH', description: 'Fiber Keystone 25/pack', requested: '1' },
            { itemCode: '14J388', description: 'Coax Insert 10/bag', requested: '1' },
            { itemCode: '3M 4026-1X1', description: 'DBL Sticky Squares', requested: '1' },
            { itemCode: 'RED-820', description: 'Silicone handheld tube', requested: '1' },
            { itemCode: '2074064', description: "Surge Protector PStrip 7 Out, 4'", requested: '1' },
            { itemCode: '3187939', description: 'TL-SG105 5P Gigabit Ethernet Switc', requested: '1' },
            { itemCode: 'PS36L-K7-2', description: '24 Hr. Battery Backup', requested: '1' }
        ],
        copperData: [

            { itemCode: 'C6E-1000-WHT', description: '1000FT CAT6 PVC Bulk (White)', requested: '1' },
            { itemCode: 'C6E-1000-UV', description: '1000FT CAT6 UV (Black)', requested: '1' },
            { itemCode: '6-554720-3', description: 'RJ-45 Ends 100/bag', requested: '1' },
            { itemCode: '7001-6P4C', description: 'RJ-11 Ends 100/bag', requested: '1' },
            { itemCode: 'CAT5E-KJ-WHI', description: 'Cat5E Copper Keystone Jack 50/bag', requested: '1' },
            { itemCode: '66B1-6', description: '6-Pair Freddy', requested: '1' },
            { itemCode: '66B1-12', description: '12-Pair Freddy', requested: '1' },
            { itemCode: '163-06', description: 'Copper Splice Box', requested: '1' },
            { itemCode: '649A1-49', description: 'MPOE Filter', requested: '1' },
            { itemCode: '95S-1-12', description: 'MPOE NID Filter Module', requested: '1' },
            { itemCode: 'SA1-1000', description: 'Bridge Clips 50/bag', requested: '1' },
            { itemCode: '98303397', description: 'Cross Connect Wire', requested: '1' },
            { itemCode: '50029', description: '2 Port Jelly Beans (UY-BOX) 100/box', requested: '1' },
            { itemCode: 'UR2-BOX', description: '3 Port Jelly Beans 100/box', requested: '1' },
            { itemCode: '4625A-24I', description: '1 port Leviton RJ-11 Jack', requested: '1' },
            { itemCode: '83-056', description: 'White Circular Jack', requested: '1' },
            { itemCode: 'WP-1-WHI', description: '1 Port Copper Wall Plate', requested: '1' },
            { itemCode: 'WP-2-WHI', description: '2 Port Copper Wall Plate', requested: '1' },
            { itemCode: 'SM-1-WHI', description: '1 Port Biscuit Block 20/pack', requested: '1' },
            { itemCode: 'SM-2-WHI', description: '2 Port Biscuit Block 10/pack', requested: '1' },
            { itemCode: '60-0021-S', description: 'Mud Ring (1-gang low volt mntg bracket)', requested: '1' },
            { itemCode: '900LCC-2F-50', description: 'Bonded Filter', requested: '1' },
            { itemCode: '1001-301003', description: 'Single Line Filter', requested: '1' },
            { itemCode: '900LCCS-2F-50', description: 'Dual-Line Splitter Filter', requested: '1' },
            { itemCode: 'LFT-4-1-GB', description: 'Single Line Splitter Filter', requested: '1' }
        ],
        enterpriseData: [
            { itemCode: 'C275926N-15F', description: 'Hydra Cable, RJ45/CAT 5E 24/4P 6"', requested: '1' },
            { itemCode: 'C5E-001-BLUE', description: "1' CAT5E Patch Cable Blue", requested: '1' },
            { itemCode: 'C5E-003-BLUE', description: "3' CAT5E Patch Cable Blue", requested: '1' },
            { itemCode: 'C5E-005-BLUE', description: "5' CATE Patch Cable Blue", requested: '1' },
            { itemCode: 'C5E-007-BLUE', description: "7' CAT5E Patch Cable Blue", requested: '1' },
            { itemCode: 'C5E-010-BLUE', description: "10' CAT5E Patch Cable Blue", requested: '1' },
            { itemCode: 'C5E-015-BLUE', description: "15' CAT5E Patch Cable Blue", requested: '1' },
            { itemCode: 'M1-50', description: '66 Block', requested: '1' },
            { itemCode: 'M2-5W', description: 'AMP End 66 Block', requested: '1' },
            { itemCode: 'MC4LH-9', description: '66 Block Cover', requested: '1' },
            { itemCode: 'S896', description: '66 Block Feet', requested: '1' },
            { itemCode: 'MP-5T180MUNNA5', description: 'CAT5 25-Pair Amp Telco Cable-5ft', requested: '1' },
            { itemCode: 'MP-5T180MUNNA15', description: 'CAT5 25-Pair Amp Telco Cable-15ft', requested: '1' },
            { itemCode: 'MP-5T180MUNNA25', description: 'CAT5 25-Pair Amp Telco Cable-25ft', requested: '1' },
            { itemCode: 'PP7-3038-MUSH', description: 'Mushroom Post With Screw', requested: '1' }
        ],
        toolsData: [

            { itemCode: 'STICKER-DNR', description: 'ONT Sticker - Small', requested: '1' },
            { itemCode: 'STICKER-DNR-ONT', description: 'ONT Sticker - Large', requested: '1' },
            { itemCode: 'STICKER-DNR-10G', description: 'ONT Caution Sticker for 10G', requested: '1' },
            { itemCode: 'ALAA-8J', description: 'AA Batteries', requested: '1' },
            { itemCode: 'ALAAA-8J', description: 'AAA Batteries', requested: '1' },
            { itemCode: 'AL9V-12PPJ', description: '9v Battery', requested: '1' },
            { itemCode: 'GAL-BFS37554', description: 'Flex Bit', requested: '1' },
            { itemCode: 'GAL-BH37512', description: '3/8" x 12" Wood Bit', requested: '1' },
            { itemCode: 'GAL-BH37518', description: '3/8" x 18" Wood Bit', requested: '1' },
            { itemCode: 'GAL-H37513', description: '3/8" x 12" Masonry Bit', requested: '1' },
            { itemCode: 'GAL-H37518', description: '3/8" x 18" Masonry Bit', requested: '1' },
            { itemCode: 'GAL-H50013', description: '1/2" x 12" Bit', requested: '1' },
            { itemCode: 'GAL-H50024', description: '1/2" x 24" Bit', requested: '1' },
            { itemCode: 'A-98980', description: '#2 2" Phillips bit', requested: '1' },
            { itemCode: '49-66-4702', description: '1/4" Drive Bit', requested: '1' },
            { itemCode: 'LBHX002', description: '5/32" Bit', requested: '1' },
            { itemCode: 'LBHX0035', description: '3/16" Bit', requested: '1' },
            { itemCode: 'IMC16', description: '12" x 6" Bit', requested: '1' },
            { itemCode: 'DIV-CSB018S', description: 'Con-Sert Bit', requested: '1' },
            { itemCode: 'TZE-231', description: 'Label Maker Tape- Big', requested: '1' },
            { itemCode: 'KEN-5GB', description: 'Bucket', requested: '1' },
            { itemCode: 'YZYAYUJRONSC-01', description: 'Booties', requested: '1' },
            { itemCode: 'B00C2DRVRI', description: 'Mini Broom and Dust Pan', requested: '1' },
            { itemCode: 'SHR-3-AIO', description: 'Wall Patch', requested: '1' },
            { itemCode: '906', description: 'Drop Tensioner', requested: '1' },
            { itemCode: '31-00809', description: 'P-Hook', requested: '1' },
        ]
    };

    function handleCheck(){console.log(siteData.modemsData)}

    function handleChange(e) {
        let item = { itemCode: '', description: '', requested: 0 };
        item.itemCode = e.target.id;
        item.description = e.target.name;
        item.requested = e.target.value;
        props.setOrderTable([
            ...props.orderTable,
            { itemCode: item.itemCode, description: item.description, requested: item.requested },
        ]);
        setOrder([...order, `\n${item.description}, count: ${item.requested}`]);
    }

    const renderDropdownOptions = (count) => {
        const options = [];
        for (let i = 0; i <= count; i++) {
            options.push(<option value={i} key={i}>{i}</option>);
        }
        return options;
    };



    const toggleCollapse = () => {
        setIsCollapsed(!isCollapsed);
    };


    const displayData = siteData.essentialData.map((i, idx) => {
        return (
            <div key={idx} >
                <p onChange={handleChange}>{i.description} - <select id={i.itemCode} name={i.description}>
                    {renderDropdownOptions(10)}
                </select></p>

            </div>
        )
    })



    return (
        <div>
            <button onClick={handleCheck}>check</button>
            <button className="btn btn-secondary custom-width btn-color1" onClick={toggleCollapse}>

                {isCollapsed ? 'Essentials' : 'Collapse'}
            </button>
            {!isCollapsed && (
                <div>
                    <div>
                        <div className='Essentials items-container'>
                            <h2 className='items-title'>Fiber Essentials</h2>
                            <div className='items-list'>
                                {displayData}

                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default EssentialsTest;



//=======





