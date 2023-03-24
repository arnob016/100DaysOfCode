
export async function newTransection(customerPub: string, assets: string[]) {
	const masterPub = process.env.NEXT_PUBLIC_MASTER_PUBKEY!
	const issuerAcc = Keypair.random()
	const issuerPub = issuerAcc.publicKey()

	const amount = ONE_ASSET_AMOUNT.toString()
	const fee = "100000"
	const limit = "1"
	const spAssets = assets.map((a) => new Asset(a.toString(), issuerPub))

	const transactionInializer = await server.loadAccount(customerPub)
	const transection = new TransactionBuilder(transactionInializer, {
		fee: fee,
		networkPassphrase: NET_TYPE,
	})
		.addOperation(
			Operation.payment({
				destination: masterPub,
				asset: Asset.native(),
				amount: "90",
			})
		)
		.addMemo(Memo.text("payment to master"))
		.addOperation(
			Operation.createAccount({
				destination: issuerPub,
				startingBalance: "50",
				source: masterPub,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[0],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[1],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[2],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[3],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[4],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[5],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[6],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[7],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[8],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[9],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[10],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[11],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[12],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[13],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[14],
				source: customerPub,
				limit: limit,
			})
		)
		.addOperation(
			Operation.changeTrust({
				asset: spAssets[15],
				source: customerPub,
				limit: limit,
			})
		)
		// Set Home Domain
		.addOperation(
			Operation.setOptions({
				homeDomain: HOME_DOMAIN,
				source: issuerPub,
			})
		)
		// Payment
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[0],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[1],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[2],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[3],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[4],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[5],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[6],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[7],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[8],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[9],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[10],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[11],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[12],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[13],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[14],
				amount: amount,
			})
		)
		.addOperation(
			Operation.payment({
				destination: customerPub,
				source: issuerPub,
				asset: spAssets[15],
				amount: amount,
			})
		)
		.setTimeout(TimeoutInfinite)
		.build()

	transection.sign(issuerAcc)

	return { transection, issuerPubKey: issuerPub }
}