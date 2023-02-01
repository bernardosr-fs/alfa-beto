package com.alfabetoapi.controller;

import com.alfabetoapi.controller.response.CustomizationResponse;
import com.alfabetoapi.model.enums.CustomizationTypeEnum;
import com.alfabetoapi.service.ShopService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequiredArgsConstructor
@RequestMapping("/shop")
public class ShopController {

    private final ShopService shopService;

    @GetMapping("/avatars")
    public List<CustomizationResponse> getAvatarShop() {
        return shopService.getShop(CustomizationTypeEnum.AVATAR);
    }

    @GetMapping("/profile-colors")
    public List<CustomizationResponse> getProfileColorShop() {
        return shopService.getShop(CustomizationTypeEnum.PROFILE_COLOR);
    }

    @PostMapping("/buy/{customizationId}")
    public void buyCustomization(@PathVariable Long customizationId) {
        shopService.buyCustomization(customizationId);
    }
}
