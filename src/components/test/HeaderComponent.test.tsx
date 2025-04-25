import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { HeaderComponent } from '../HeaderComponent'

describe('HeaderComponent', () => {
    const mockClick = vi.fn()

    const defaultProps = {
        title: 'Main Title',
        subTitle: 'Subtitle text',
        bgColor: 'primary',
        height: 200,
        colorTitle: '#ffffff',
        colorSubTitle: '#cccccc',
        buttonText: 'Action',
        onButtonClick: mockClick,
        showButton: true
    }

    it('renders with default props', () => {
        render(<HeaderComponent title="Test Title" showButton={false} />)

        expect(screen.getByRole('heading', { name: 'Test Title' })).toBeInTheDocument()
        expect(screen.queryByTestId('subtitle')).toBeNull()
        expect(screen.queryByRole('button')).toBeNull()
    })

    it('displays title and subtitle correctly', () => {
        render(<HeaderComponent {...defaultProps} />)

        const title = screen.getByRole('heading', { name: 'Main Title' })
        const subtitle = screen.getByText('Subtitle text')

        expect(title).toBeInTheDocument()
        expect(subtitle).toBeInTheDocument()
        expect(window.getComputedStyle(title).color).toBe('rgb(255, 255, 255)')
        expect(window.getComputedStyle(subtitle).color).toBe('rgb(204, 204, 204)')
    })

    it('applies correct background color and height', () => {
        render(<HeaderComponent {...defaultProps} />)

        const headerBox = screen.getByTestId('header-box')
        const styles = window.getComputedStyle(headerBox)
        expect(styles.height).toBe('200px')
    })
})