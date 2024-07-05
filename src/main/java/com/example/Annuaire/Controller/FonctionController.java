package com.example.Annuaire.Controller;

import com.example.Annuaire.Entity.Fonction;
import com.example.Annuaire.Entity.Salarie;
import com.example.Annuaire.Entity.Site;
import com.example.Annuaire.Service.IFonctionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/fonctions")
public class FonctionController {

    @Autowired
    private IFonctionService FonctionService;

    @GetMapping
    public List<Fonction> getAllFonction() {
        return FonctionService.findAll();
    }

    @PostMapping
    public Fonction createFonction(@RequestBody Fonction fonction) {
        return FonctionService.save(fonction);
    }

    @GetMapping("/findById/{id}")
    public ResponseEntity<Fonction> getFonctionById(@PathVariable Long id) {
        Fonction fonction = FonctionService.findById(id);
        if (fonction != null) {
            return ResponseEntity.ok(fonction);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("update/{id}")
    public Fonction updateFonction(@PathVariable Long id, @RequestBody Fonction fonction) {
        fonction.setId(id);
        return FonctionService.update(fonction);
    }
}