import BN from 'bignumber.js'
import { Buffer } from 'buffer'

export class EthValue {
    private value: string | number | BN

    constructor(raw: Buffer | BN | string | number) {
        if (raw instanceof Buffer) {
            this.value = '0x' + Buffer.from(raw).toString('hex')
            this.value = this.value === '0x' ? '0x0' : this.value
            return
        }

        if (typeof raw === 'string' || typeof raw === 'number' || raw instanceof BN) {
            this.value = raw
            return
        }

        this.value = '0'
    }

    public toEth(): number {
        const value = this.value instanceof BN ? this.value : new BN(this.value)
        return value.div(1_000_000_000_000_000_000).toNumber()
    }

    public toEthBN(): BN {
        const value = this.value instanceof BN ? this.value : new BN(this.value)
        return value.div(1_000_000_000_000_000_000)
    }

    public toWei(): number {
        const value = this.value instanceof BN ? this.value : new BN(this.value)
        return value.toNumber()
    }

    public toGWei(): number {
        const value = this.value instanceof BN ? this.value : new BN(this.value)
        return value.div(1_000_000_000).toNumber()
    }

    public toGweiBN(): BN {
        const value = this.value instanceof BN ? this.value : new BN(this.value)
        return value.div(1_000_000_000)
    }

    public toString(): string {
        if (typeof this.value === 'number' || this.value instanceof BN) {
            return this.value.toString()
        }
        return this.value
    }
}
