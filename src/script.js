async function fetchBlock() {

    let displayBlock = document.getElementById("block-number")

    // Fetch latest block number quering the Etherscan API
    const response = await fetch("/api")

    // Place the JSON response in a constant and log it
    const blockHex = await response.json()
    console.log(`The latest block in HEX is: ${blockHex.result}`)

    // Extract the HEX block value from the JSON 
    const blockString = JSON.stringify(blockHex.result)
    //console.log(blockString)

    // Slice the HEX value to remove 0x
    const slicedBlock = blockString.slice(3, -1)
    //console.log(slicedBlock)

    // Convert and log the decimal block number
    const blockDecimal = parseInt(slicedBlock, 16)
    console.log(`The latest block numeber is: ${blockDecimal}`)
    displayBlock.innerHTML = blockDecimal
}