package com.example.Annuaire.Controller;

import com.example.Annuaire.Entity.Salarie;
import com.example.Annuaire.Entity.Site;
import com.example.Annuaire.Service.ISiteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/sites")
public class SiteController {

    @Autowired
    private ISiteService SiteService;

    @GetMapping
    public List<Site> getAllSites() {
        return SiteService.findAll();
    }

    @PostMapping
    public Site createSite(@RequestBody Site site) {
        return SiteService.save(site);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Site> getSalarieById(@PathVariable Long id) {
        Site site = SiteService.findById(id);
        if (site != null) {
            return ResponseEntity.ok(site);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("update/{id}")
    public Site updateSite(@PathVariable Long id, @RequestBody Site site) {
        site.setId(id);
        return SiteService.update(site);
    }
}