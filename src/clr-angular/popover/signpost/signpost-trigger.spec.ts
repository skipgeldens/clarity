/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClrIconModule } from '../../icon/icon.module';
import { IfOpenService } from '../../utils/conditional/if-open.service';

import { ClrSignpostModule } from './signpost.module';
import { SignpostIdService } from './providers/signpost-id.service';
import { SignpostFocusManager } from './providers/signpost-focus-manager.service';

export default function(): void {
  describe('SignpostToggle component', function() {
    let fixture: ComponentFixture<any>;
    let clarityElement: any;
    let ifOpenService: IfOpenService;
    let trigger: HTMLElement;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [ClrSignpostModule, ClrIconModule],
        declarations: [TestTrigger],
        providers: [IfOpenService, SignpostIdService, SignpostFocusManager],
      });

      fixture = TestBed.createComponent(TestTrigger);
      fixture.detectChanges();
      clarityElement = fixture.nativeElement;
      ifOpenService = TestBed.get(IfOpenService);
      trigger = clarityElement.querySelector('.signpost-action');
    });

    afterEach(() => {
      fixture.destroy();
    });

    it('should toggle the IfOpenService.open property on click', function() {
      expect(ifOpenService.open).toBeUndefined();
      trigger.click();
      expect(ifOpenService.open).toEqual(true);
      trigger.click();
      expect(ifOpenService.open).toEqual(false);
    });

    it('should have active class when open', function() {
      expect(trigger.classList.contains('active')).toBeFalsy();
      trigger.click();
      fixture.detectChanges();
      expect(trigger.classList.contains('active')).toBeTruthy();
      trigger.click();
      fixture.detectChanges();
      expect(trigger.classList.contains('active')).toBeFalsy();
      ifOpenService.open = true;
      fixture.detectChanges();
      expect(trigger.classList.contains('active')).toBeTruthy();
      ifOpenService.open = false;
      fixture.detectChanges();
      expect(trigger.classList.contains('active')).toBeFalsy();
    });

    it('has a default label from common strings', () => {
      expect(trigger.getAttribute('aria-label')).toEqual('Signpost Toggle');
    });

    it('reflects the correct aria-expanded state', () => {
      expect(trigger.getAttribute('aria-expanded')).toBeFalsy();
      trigger.click();
      fixture.detectChanges();
      expect(trigger.getAttribute('aria-expanded')).toBe('true');
      trigger.click();
      fixture.detectChanges();
      expect(trigger.getAttribute('aria-expanded')).toBe('false');
    });
  });
}

@Component({
  template: `
        <button
            #anchor
            type="button"
            class="signpost-action btn btn-small btn-link"
            clrSignpostTrigger>
            <clr-icon shape="info"></clr-icon>
        </button>
    `,
})
class TestTrigger {}
