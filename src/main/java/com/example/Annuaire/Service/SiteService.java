package com.example.Annuaire.Service;

import com.example.Annuaire.Entity.Salarie;
import com.example.Annuaire.Entity.Site;
import com.example.Annuaire.Repository.SiteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SiteService implements ISiteService {

    @Autowired
    private SiteRepository siteRepository;

    @Override
    public List<Site> findAll() {
        return siteRepository.findAll();
    }

    @Override
    public Site save(Site site) {
        return siteRepository.save(site);
    }

    @Override
    public Site findById(Long id) {
        Optional<Site> optionalSite = siteRepository.findById(id);
        return optionalSite.orElse(null); // Vous pouvez gérer le cas où le salarié n'est pas trouvé ici
    }

    @Override
    public Site update(Site site) {
        Optional<Site> existingSite = siteRepository.findById(site.getId());
        if (existingSite.isPresent()) {
            return siteRepository.save(site);
        } else {
            // Handle the case where the site is not found
            throw new RuntimeException("Site not found with id: " + site.getId());
        }
    }
}