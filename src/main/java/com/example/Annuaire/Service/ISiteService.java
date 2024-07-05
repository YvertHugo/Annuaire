package com.example.Annuaire.Service;

import com.example.Annuaire.Entity.Salarie;
import com.example.Annuaire.Entity.Site;

import java.util.List;

public interface ISiteService {
    List<Site> findAll();
    Site findById(Long id);
    Site update(Site site);
    Site save(Site site);
}
