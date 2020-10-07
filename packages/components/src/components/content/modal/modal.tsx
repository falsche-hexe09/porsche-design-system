import { Component, Event, EventEmitter, Element, h, JSX, Prop, Watch } from '@stencil/core';
import { prefix } from '../../../utils';

@Component({
  tag: 'p-modal',
  styleUrl: 'modal.scss',
  shadow: true
})
export class Modal {
  @Element() public host!: HTMLElement;

  /** If true, the modal is open. **/
  @Prop() public open?: boolean = false;
  /** If true, the modal will not have a close button. **/
  @Prop() public disableCloseButton?: boolean = false;
  /** The title of the modal **/
  @Prop() public subject?: string;
  /** Emitted when the component requests to be closed. **/
  @Event() public close?: EventEmitter<void>;

  @Watch('open')
  openChangeHandler(val: boolean) {
    val ? this.initEventListener() : this.removeEventListener();
  }

  public connectedCallback(): void {
    this.open && this.initEventListener();
  }

  public disconnectedCallback(): void {
    this.removeEventListener();
  }

  private initEventListener = (): void => {
    document.addEventListener('keydown', this.handleKeyboardEvents);
  };
  private removeEventListener = (): void => {
    document.removeEventListener('keydown', this.handleKeyboardEvents);
  };

  private handleKeyboardEvents = ({ key }: KeyboardEvent): void => {
    if (key === 'Esc' || key === 'Escape') {
      this.closeModal();
    }
  };

  private closeModal = (): void => {
    this.close.emit();
  };

  public render(): JSX.Element {
    const hasHeader = this.subject || !this.disableCloseButton;
    const baseClasses = {
      [prefix('modal')]: true
    };
    const containerClasses = {
      [prefix('modal__container')]: true
    };
    const headerClasses = {
      [prefix('modal__header')]: true,
      [prefix('modal__header--closable')]: !this.disableCloseButton
    };
    const bodyClasses = prefix('modal__body');
    const footerClasses = prefix('modal__footer');
    const btnCloseClasses = prefix('modal__close');

    return (
      this.open && (
        <div class={baseClasses} role="presentation">
          <div class={containerClasses} role="presentation" aria-modal="true" tabindex="-1">
            {hasHeader && (
              <div class={headerClasses}>
                {this.subject && <p-headline variant="headline-2">{this.subject}</p-headline>}
                {!this.disableCloseButton && (
                  <div class={btnCloseClasses}>
                    <p-button-pure hideLabel icon="close" aria-label="Close" onClick={this.closeModal}>
                      Close
                    </p-button-pure>
                  </div>
                )}
              </div>
            )}

            <div class={bodyClasses}>
              <slot />
            </div>

            {this.isFooterDefined && (
              <div class={footerClasses}>
                <slot name="footer" />
              </div>
            )}
          </div>
        </div>
      )
    );
  }

  private get isFooterDefined(): boolean {
    return !!this.host.querySelector('[slot="footer"]');
  }
}
