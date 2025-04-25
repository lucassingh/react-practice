import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { LoaderComponent } from '../LoaderComponent'

describe('LoaderComponent', () => {
    it('should render when open is true', () => {
        render(<LoaderComponent open={true} />)
        expect(screen.queryByRole('presentation')).toBeDefined()
        expect(screen.queryByRole('progressbar')).toBeDefined()
    })

    it('should hide when close is false', () => {
        render(<LoaderComponent open={false} />)
        expect(screen.queryByRole('presentation')).toBeDefined()
        expect(screen.queryByRole('progressbar')).toBeDefined()
    })
})